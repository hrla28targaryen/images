const db = require('./index')
const faker = require('faker')

const seed = () => {
    db.create({
        product_id: faker.random.number(),
        images: [],
        stars: faker.random.number(),
        reviewTitle: faker.commerce.productMaterial(),
        userInfo: {
            height: faker.random.number(),
            weight: faker.random.number(),
            bust: faker.random.number(),
            bodyType: faker.lorem.word(),
            age: faker.random.number(),
            sizeWorn: faker.commerce.productName(),
            usualSize: faker.random.number(),
            wornTo: faker.commerce.department()
        },
        comment: faker.lorem.sentences(),
        reviewImages: faker.image.fashion()
    })
}

seed()