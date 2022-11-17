const { Schema, model } = require("mongoose");

const InvoiceSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    po_number: {
      type: String,
      require: true,
    },
    gst_in: {
      type: String,
      require: true,
    },
    invoice_number: {
        type: String,
        require: true,
      },
    date_of_issue: {
      type: String,
      require: true,
    },
    zpid: {
      type: String,
      required: true,
    },
    payment_terms: {
      type: String,
      require: true,
    },
    name_of_the_trainer: {
      type: Object,
      require: true,
    },
    training_delivery_location: {
      type: Object,
      require: true,
    },
    technology: {
      type: Object,
      require: true,
    },
    training_dates: {
      type: Object,
      require: true,
    },
    total_duration: {
      type: Object,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Invoice = model("invoice", InvoiceSchema);

module.exports = { Invoice };
