 module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        finished: Boolean ,
        finished_at: Date,
        created_at :Date ,
        updated_at :Date ,
      },
      { timestamps: true , currentTime: () => Math.floor(Date.now() / 1000) }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Task = mongoose.model("task", schema);
    return Task;
  };