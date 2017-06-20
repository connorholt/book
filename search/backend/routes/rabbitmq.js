'use strict';

const amqp = require('amqplib/callback_api');

const express = require('express');
const router = express.Router();

router.get('/send', (req, res, next) => {
    amqp.connect('amqp://rabbitmq', (err, conn) => {
        conn.createChannel((err, ch) => {
            let q = 'queue_name';

            ch.assertQueue(q, {durable: true});
            for (let i =0; i < 1000; i++) {
                ch.sendToQueue(q, new Buffer('Hello World! №' + i), {persistent: true});
            }

            console.log(" [x] Sent 'Hello World!'");
        });

        setTimeout(() => {
            conn.close();
            process.exit(0)
        }, 500);
    });

    res.send('respond with a resource');
});

amqp.connect('amqp://rabbitmq', (err, conn) => {
    conn.createChannel((err, ch) => {
        let q = 'queue_name';

        ch.assertQueue(q, {durable: true});
        ch.prefetch(1);
        ch.consume(q, (msg) => {
            setTimeout(() => {

                console.log(" [x] Received %s", msg.content.toString());
                ch.ack(msg);
            }, (Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000));

        }, {noAck: false});
    });
});

router.get('/accept', (req, res, next) => {
    // amqp.connect('amqp://rabbitmq', (err, conn) => {
    //     conn.createChannel((err, ch) => {
    //         let q = 'hello';
    //
    //         ch.assertQueue(q, {durable: false});
    //         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    //         ch.consume(q, (msg) => {
    //             console.log(" [x] Received %s", msg.content.toString());
    //         }, {noAck: true});
    //     });
    // });

    res.send('respond with a resource');
});

// repositories
// GET('/search/period/all', req => db.period.all(
//     req.body.date_from,
//     req.body.date_to,
//     req.body.count_persons
// ));


// global functions
function GET(url, handler) {
    router.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({
                    success: true,
                    data
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

module.exports = router;