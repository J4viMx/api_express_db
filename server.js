const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Cors 
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});


app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
const id = req.params.id;
const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });


app.put('/explorers/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.explorer.update({
    where: {
        id: id
    },
    data: {
        mission: req.body.mission
    }
})

return res.json({message: "Actualizado correctamente"});
});


app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});




//Nueva tabla

app.get('/explorersNew', async (req, res) => {
    const allExplorers =  await prisma.explorer_new.findMany({});
    res.json(allExplorers);
  });

app.get('/explorersNew/:id', async (req, res) => {
const id = req.params.id;
const explorer = await prisma.explorer_new.findUnique({where: {id: parseInt(id)}});
res.json(explorer);
});

app.post('/explorersNew', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer_new.create({data: explorer});
    return res.json({message});
  });


app.put('/explorersNew/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.explorer_new.update({
    where: {
        id: id
    },
    data: {
        mission: req.body.mission
    }
})

return res.json({message: "Actualizado correctamente"});
});


app.delete('/explorersNew/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer_new.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});




//Tabla mission commander


app.get('/missionCommander', async (req, res) => {
  const allExplorers =  await prisma.explorer_new.findMany({});
  res.json(allExplorers);
});

app.get('/missionCommander/:id', async (req, res) => {
const id = req.params.id;
const explorer = await prisma.explorer_new.findUnique({where: {id: parseInt(id)}});
res.json(explorer);
});

app.post('/missionCommander', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
   };
  const message = 'mission commander creado.';
  await prisma.explorer_new.create({data: explorer});
  return res.json({message});
});


app.put('/missionCommander/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.explorer_new.update({
  where: {
      id: id
  },
  data: {
      mission: req.body.mission
  }
})

return res.json({message: "Actualizado correctamente"});
});


app.delete('/missionCommander/:id', async (req, res) => {
const id = parseInt(req.params.id);
await prisma.explorer_new.delete({where: {id: id}});
return res.json({message: "Eliminado correctamente"});
});
