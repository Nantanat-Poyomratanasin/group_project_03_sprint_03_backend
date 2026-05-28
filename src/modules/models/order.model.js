import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    total_amount: {
      type: Decimal128,
      required: true,
      trim: true
    },
    status: {
      type: String,
      required: true,
      trim: true
    },
    order_item: [
      {
        book_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        book_name: {
          type: String,
          required: true,
          unique: true,
          trim: true
        },
        author: {
          type: String,
          required: true,
          unique: true,
          trim: true
        },
        quantity: {
          type: Number,
          required: true,
          trim: true
        },
        price: {
          type: mongoose.Schema.Types.Decimal128,
          required: true,
          trim: true
        },
        img_link: {
          type: String,
          required: true,
          trim: true
        }
      }
    ]
  },
  { timestamps: true }
);

export const Order = mongoose.model('order', orderSchema);
