/**
 * Created by olha on 05.09.16.
 */

/* global ProfilePictures, Attachments, Meteor */
/* eslint no-undef: "error" */

/* eslint object-shorthand:  ["error", "always"] */
/* eslint-env es6 */

ProfilePictures.allow({
  /**
   * @method insert
   * @param userId
   * @param doc
   * @returns {boolean}
   */
  insert() {
    return true;
  },
  /**
   * @method update
   * @param userId
   * @param doc
   * @param fieldNames
   * @param modifier
   * @returns {boolean}
   */
  update() {
    return true;
  },
  /**
   * @method download
   * @param userId
   * @returns {boolean}
   */
  download() {
    return true;
  },
});

Attachments.allow({
  /**
   * @method insert
   * @param userId
   * @param doc
   * @returns {boolean}
   */
  insert() {
    return true;
  },
  /**
   * @method update
   * @param userId
   * @param doc
   * @param fieldNames
   * @param modifier
   * @returns {boolean}
   */
  update() {
    return true;
  },
  /**
   * @method download
   * @param userId
   * @returns {boolean}
   */
  download() {
    return true;
  },
});

Meteor.users.allow({
  /**
   * @method update
   * @param userId
   * @param doc
   * @param fieldNames
   * @param modifier
   * @returns {boolean}
   */
  update(userId, doc, fieldNames) {
    if (userId === doc._id && !doc.username &&
      fieldNames.length === 1 && fieldNames[0] === 'username') {
      return true;
    }
    return false;
  },
});
