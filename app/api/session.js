import express from 'express';
import BodyParser from 'body-parser';

const router = express.router();
const parseUrlEncoded = BodyParser.urlencoded({extended: false});