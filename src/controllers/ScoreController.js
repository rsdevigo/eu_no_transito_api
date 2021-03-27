import model from '../models';
import sequelize from 'sequelize';

const { Score } = model;
const orderFilter = {
  notification: 'notifications_score',
  infraction: 'infractions_score',
  time: 'time_left',
  total: sequelize.literal(
    'COALESCE(notifications_score, 0) + COALESCE(infractions_score, 0) + COALESCE(time_left, 0)'
  ),
};
export default {
  async create(req, res) {
    const {
      name,
      email,
      notifications_score,
      infractions_score,
      time_left,
    } = req.body;
    try {
      await Score.create({
        name,
        email,
        notifications_score,
        infractions_score,
        time_left,
      });
      return res.status(201).send({ message: 'Score created successfully' });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          'Could not perform operation at this time, kindly try again later.',
      });
    }
  },

  async fetchOne(req, res) {
    const { id } = req.params;
    try {
      const score = await Score.findByPk(id, {
        attributes: {
          include: [
            [
              sequelize.literal(
                'COALESCE(notifications_score, 0) + COALESCE(infractions_score, 0) + COALESCE(time_left, 0)'
              ),
              'total_score',
            ],
          ],
        },
      });
      if (!score) {
        return res.status(200).send({});
      }
      return res.status(200).send(score);
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          'Could not perform operation at this time, kindly try again later.',
      });
    }
  },

  async list(req, res) {
    var { limit, order, direction } = req.query;

    if (!limit) {
      limit = 10;
    } else {
      limit = +limit;
    }
    if (!order) {
      order = 'total';
    }
    if (!direction) {
      direction = 'desc';
    }

    try {
      const scores = await Score.findAll({
        attributes: {
          include: [
            [
              sequelize.literal(
                'COALESCE(notifications_score, 0) + COALESCE(infractions_score, 0) + COALESCE(time_left, 0)'
              ),
              'total_score',
            ],
          ],
        },
        limit: limit,
        order: [
          [orderFilter[order], direction.toUpperCase()],
          ['createdAt', direction.toUpperCase()],
        ],
      });
      return res.status(200).send(scores);
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          'Could not perform operation at this time, kindly try again later.',
      });
    }
  },
};
