import { Kafka, Partitioners } from 'kafkajs'

export const KafkaProducerConfig = async function () {
    const kafka = new Kafka({
        clientId: 'user-service',
        brokers: ['localhost:9092']
    });
    let producer = await kafka.producer({
        createPartitioner: Partitioners.LegacyPartitioner
    });
    await producer.connect()
    return producer;
}

export const KafkaConsumerConfig = async function (groupId) {
    const kafka = new Kafka({
        clientId: 'user-service',
        brokers: ['localhost:9092']
    });
    let consumer = await kafka.consumer({
        groupId: groupId
    });
    await consumer.connect()
    return consumer;
}