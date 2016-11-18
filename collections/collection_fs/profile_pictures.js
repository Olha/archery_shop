/* global ProfilePictures: true, FS: true, gm: true */

ProfilePictures = new FS.Collection('profilePictures', {
  stores: [
    new FS.Store.GridFS('images', {
      /**
       * @method transformWrite
       * @param fileObj
       * @param readStream
       * @param writeStream
       * @returns {*}
       */
      transformWrite(fileObj, readStream, writeStream) {
        if (gm.isAvailable) {
          return gm(readStream, fileObj.name()).autoOrient().stream().pipe(writeStream);
        }
        return readStream.pipe(writeStream);
      },
    }), new FS.Store.GridFS('thumbs', {
      /**
       * @method transformWrite
       * @param fileObj
       * @param readStream
       * @param writeStream
       * @returns {*}
       */
      transformWrite(fileObj, readStream, writeStream) {
        let size;
        if (gm.isAvailable) {
          size = {
            width: 200,
            height: 200,
          };
          return gm(readStream, fileObj.name())
            .autoOrient().resize(`${size.width}^>, ${size.height}^>`)
            .gravity('Center').extent(size.width, size.height).stream().pipe(writeStream);
        }
        return readStream.pipe(writeStream);
      },
    }),
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'],
    },
  },
});
