const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zmagebg.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const collegeCollection = client.db("collegebooking").collection("colleges");
    

    app.get('/colleges', async (req, res) => {
      const result = await collegeCollection.find().toArray();
      res.send(result);
    })
    app.get('/colleges/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          classid: 1, instructoremail: 1, instructorname: 1, classimage: 1, classname: 1, available_seats: 1,
          booked_seats: 1, price: 1
        },
      };
      const result = await classCollection.findOne(query, options);
      res.send(result);
    })
    // class by instructor
    app.get('/classes', async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email) {
        query = { instructoremail: req.query.email }
      }
      const result = await classCollection.find(query).toArray();
      res.send(result);
    })

    app.get('/instructors', async (req, res) => {
      const result = await instructorCollection.find().toArray();
      res.send(result);
    })
    app.get('/cart', async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    })
    app.get('/cart/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          classid: 1, instructoremail: 1, instructorname: 1, classimage: 1, classname: 1, available_seats: 1,
          booked_seats: 1, price: 1, email: 1, status:1
        },
      };
      const result = await cartCollection.findOne(query, options);
      res.send(result);
    })
    // Define API endpoint to update user's cart
   
    app.post('/cart', async (req, res) => {
      const cart = req.body;
     
      const result = await cartCollection.insertOne(cart);
      res.send(result);
    });
    app.delete('/cart/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    })

    app.get('/myclasses', async (req, res) => {
      const result = await myclassCollection.find().toArray();
      res.send(result);
    })
    app.post('/myclasses', async (req, res) => {
      const myclass = req.body;
      const result = await myclassCollection.insertOne(myclass);
      res.send(result);
    });
    app.get('/admin', async (req, res) => {
      const result = await AdminCollection.find().toArray();
      res.send(result);
    })
    app.get('/instructors/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          id: 1, email: 1, name: 1, image: 1, classname: 1, total_students: 1
        },
      };
      const result = await instructorCollection.findOne(query, options);
      res.send(result);
    })
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }

      const options = {
        // Include only the `title` and `imdb` fields in the returned document
        projection: {
          _id: 1, email: 1, name: 1, photo: 1
        },
      };
      const result = await usersCollection.findOne(query, options);
      res.send(result);
    })

    app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'admin'
        },
      };

      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);

    })


    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

      res.send({ token })
    })

    // Warning: use verifyJWT before using verifyAdmin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email }
      const user = await usersCollection.findOne(query);
      if (user?.role !== 'admin') {
        return res.status(403).send({ error: true, message: 'forbidden message' });
      }
      next();
    }
    // users related apis
    // app.get('/users', verifyJWT, verifyAdmin, async (req, res) => {
    //   const result = await usersCollection.find().toArray();
    //   res.send(result);
    // });
    app.get('/users',  async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query);

      if (existingUser) {
        return res.send({ message: 'user already exists' })
      }

      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.post('/payments', async (req, res) => {
      const payment = req.body;
      const insertResult = await paymentCollection.insertOne(payment);

      const query = { _id: { $in: payment.cartItems.map(id => new ObjectId(id)) } }
      const deleteResult = await cartCollection.deleteMany(query)

      res.send({ insertResult, deleteResult });
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('college booking  is running')
})

app.listen(port, () => {
  console.log(`college booking is running on port ${port}`);
})