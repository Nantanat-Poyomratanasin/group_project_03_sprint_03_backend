import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {
  getAllOrders,
  getMyOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder
} from '../orders/order.controllers.js';

import { authUser } from '../../middlewares/auth.js';

export const router = Router();

//##use controller

// User
router.post('/', authUser, createOrder);
router.get('/me', authUser, getMyOrders);

// Admin
router.get('/', authUser, authorizeAdmin, getAllOrders);
router.get('/:id', authUser, authorizeAdmin, getOrderById);
router.patch('/:id', authUser, authorizeAdmin, updateOrderStatus);
router.delete('/:id', authUser, authorizeAdmin, deleteOrder);
