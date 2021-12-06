import mongoose from 'mongoose';

const connectBD = async () => {
  return await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log('Successful connection\nRunning on port: ' +`${process.env.PORT}`);
    })
    .catch((e) => {
      console.error('Error trying to connect to Database: ', e);
    });
};

export default connectBD;