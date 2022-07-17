import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 8000;

const app = express();
import apiRoutes from './routes/api';

/* App Routes */
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port number: ${PORT}`);
});

export default app;
