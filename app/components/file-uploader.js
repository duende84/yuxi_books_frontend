import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyAttachment: function(id) {
      var store = this.get("targetObject.store");

      if (confirm("Are you sure?")) {
        store.find('attachment', id).then(function (attachment) {
          attachment.destroyRecord();
        });
      }
    }
  },
  didInsertElement: function() {
    var self = this;
    Ember.$('.file-uploader').fileupload({
      dataType: 'json',
      method: 'POST',
      url: 'http://localhost:3000/api/v1/upload',
      paramName: 'file',
      autoUpload: true,
      add: function (e, data) {
        console.error("add: e, data", e, data);
        data.submit();
      },
      submit: function (e, data) {
        console.error('submit', e, data);
        console.error("jquery submit this, self", Ember.$(this), self, self.task);
      },
      done: function (e, data) {
        var store = self.get("targetObject.store");
        var attachment = data.result.attachment;
        attachment.task = self.task;

        store.push("attachment", attachment);
        self.sendAction('saveComplete');
      },
      fail: function (e, data) {
        console.error('failed', e, data);
        self.sendAction('saveFailed');
      }
    });
  },

  willDestroyElement: function() {
    console.error('destroy');
    Ember.$('.file-uploader').fileupload('destroy');
  }
});