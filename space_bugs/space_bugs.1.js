Projects = new Mongo.Collection("projects");
Cases = new Mongo.Collection("cases");

Cases.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  body: {
    type: String,
    label: "body"
  },
  createdBy: {
    type: String,
    autoValue:function(){ return this.userId }
  }
}));

if (Meteor.isClient) {
  Template.body.helpers({
    cases: function(){
      return Cases.find({});
    }
  });
  // At the bottom of the client code
  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
}

if (Meteor.isServer) {

}

