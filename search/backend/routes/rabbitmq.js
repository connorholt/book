'use strict';

const amqp = require('amqplib/callback_api');

const express = require('express');
const router = express.Router();

router.get('/send', (req, res, next) => {
    amqp.connect('amqp://rabbitmq', (err, conn) => {
        conn.createChannel((err, ch) => {
            let q = 'hello';

            ch.assertQueue(q, {durable: false});
            ch.sendToQueue(q, new Buffer('Hello World!'));

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
        let q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, (msg) => {
            setTimeout(() => {
                console.log(" [x] Received %s", msg.content.toString());
            }, 5000);

        }, {noAck: true});
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