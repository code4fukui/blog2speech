// https://github.com/RensaData/Rensa-es/

export const getRensaFirstContent = async (rensa) => {
  return new Promise((resolve, reject) => {
    rensa.playback((err, timestamp, publicKey, msg, obj) => {
      if (err) {
        reject(err);
        return false;
      }
      //console.log({ timestamp, publicKey, msg, obj });
      resolve(msg);
      return true;
    });
  });
};
