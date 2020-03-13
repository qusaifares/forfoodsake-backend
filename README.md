<img width=100% src=https://user-images.githubusercontent.com/56275819/76587259-af3d9f00-64b9-11ea-9264-e59e83ee982a.jpg>

## Concept

Food waste in the US continues to be a crippling issue which effects everyone in our community. Here are a few stats to illustrate the issue.

##### 40% of all food in the US goes to waste

##### 20% of landfill weight is food waste

##### 49 million Americans struggle to put food on their table

##### 1 in 5 children are at risk of hunger

This app is a humble contribution to a solution that may bring about a much needed change in the dominant culture of waste. We can’t build electric cars or a rocket to mars, but we can build this app in the mean time.

## Overview

The idea for the project came about through a mixture of activism and sustainability. Our main focus was to create an app that promotes waste reduction through food management by bringing businesses and the community together to tackle a common issue and provide a tool to effectively fight hunger.

:eight_pointed_black_star: [Click here to view our app live](https://mmarmol88.github.io/forfoodsake-frontend/)

---

## Table of Contents

-   [API Overview](https://github.com/qusaifares/forfoodsake-backend#api-overview)
-   [Technologies Used](https://github.com/qusaifares/forfoodsake-backend#technologies-used)
-   [Response Requests Cycle Diagram](https://github.com/qusaifares/forfoodsake-backend#response-request-cycle-diagram)
-   [Database Model](https://github.com/qusaifares/forfoodsake-backend#database-model)
-   [Connection](https://github.com/qusaifares/forfoodsake-backend#connection)
-   [Testing](https://github.com/qusai/forfoodsake-backend#testing)
-   [Vendor Data Example](https://github.com/qusai/forfoodsake-backend#vendor-data-example)
-   [Code Samples](https://github.com/qusai/forfoodsake-backend#code-samples)
-   [Bugs & Fixes](https://github.com/qusai/forfoodsake-backend#bugs-&-fixes)
-   [Future Additions](https://github.com/qusai/forfoodsake-backend#future-additions)
-   [Contribution Guidelines](https://github.com/qusai/forfoodsake-backend#contribution-guidelines)
-   [Sources](https://github.com/qusai/forfoodsake-backend#sources)

---

## API Overview

The API contains two models- Vendor and Listing. The Vendor model is made up of all the information for said Vendor- name, email, password, street address, type of vendor (restaurant, farm, or market), and all the adjoining listings for that vendor. The Listing model contains all the information for any given listing- item name, quantity, price, dietary classification (vegan? vegetarian?), and vendorId (the adjoining vendor information of the vendor that the listing belongs to). So, to speak in programming terms, the Vendor model _**has many**_ listings, while the Listing model _**belongs to**_ Vendor. Through our API, our users can easily traverse through different vendors and all of their listings to choose which food they would like to purchase.

## Technologies used

-   [Node.js](https://nodejs.org/en/)
-   [Nodemon](https://nodemon.io/)
-   [Express](https://expressjs.com/)
-   [Sequelize](https://sequelize.org/master/)
-   [Postman](https://www.postman.com/)
-   [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
-   [Bcrypt]()
-   [PostreSQL]()

## Response Request Cycle Diagram

<img width="746" src="https://user-images.githubusercontent.com/55994508/76559663-8d1e2f80-646d-11ea-8bf2-a008998ba4c3.jpg" />

## Database Model

<img src="https://user-images.githubusercontent.com/55994508/76559992-2f3e1780-646e-11ea-863d-a3d540f01627.png" />

## Testing

-   [Chai](https://www.chaijs.com/)
-   [Mocha](https://mochajs.org/)
-   [Supertest](https://www.npmjs.com/package/supertest)

## Vendor Data Example

```yaml
{
    id: 1,
    name: 'Dollys Donuts',
    type: 'Restaurant',
    phone: '1234567890',
    email: 'dolly@do.nut',
    password: '$2b$10$uHjWS3xW/R1D7llH43dt9OQNAkgWpFBwdkiMfl6/BMIaOEcBkjs2G',
    closing_time: '12:00 AM',
    street: '123',
    city: 'New York City',
    state: 'NY',
    zip_code: '33211',
    description: 'Local, family business that know how to fry & glaze puffy dough like no other.',
    image: 'https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?1566494557',
    createdAt: '2017-07-04T00:00:00.000Z',
    updatedAt: '2020-03-09T16:22:27.115Z',
    Listings:
        [
            {
                id: 1,
                name: 'Glazed Donut',
                price: 1.59,
                quantity: 20,
                vegan: false,
                vegetarian: true,
                description: "Who doesn't love a classic. Soft yeast dough covered in an all natural glaze makes these donuts to die for.",
                image: 'https://www.gosoftstuff.com/web/image/product.template/28091/image?unique=23e3a82',
                createdAt: '2017-07-04T00:00:00.000Z',
                updatedAt: '2020-03-09T16:22:27.215Z',
                VendorId: 1,
            },
        ],
}
```

## Code Samples

Example of a GET request to view all vendors:

```javascript
router.get('/', async (req, res) => {
    try {
        const vendors = await Vendor.findAll({
            include: [Listing]
        });
        res.json(vendors);
    } catch (err) {
        console.error(err);
    }
});
```

Example of a POST request to create a new vendor with password encryption:

```javascript
router.post('/new', async (req, res) => {
    // new vendor info
    let vendorToCreate = req.body;
    try {
        // hashing password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // replacing password with hashed password
        vendorToCreate.password = hashedPassword;

        const newVendor = await Vendor.create(vendorToCreate);
        res.json(newVendor);
    } catch {
        res.status(500).send();
    }

    // req.body should be the vendor object
});
```

Example of a PUT request to update an existing vendor:

```javascript
router.put('/:id/edit', async (req, res) => {
    // req.body should look like this: { field: field being edited e.g.'email', value: 'new_email@gmail.com' }
    const vendorToUpdate = await Vendor.findByPk(req.params.id);
    vendorToUpdate[req.body.field] = req.body.value;
    vendorToUpdate.save();
    return res.json(vendorToUpdate);
});
```

## Bugs & Fixes

-   Trouble connecting front and back ends - moved CORS up above Express in the index.js to fix
-   'createdAt' & 'updatedAt' keys were rendering twice in the local host. The reason for this was because we were not seeding/migrating our data properly.

## Future Additions

-   [ ] Image upload with Amazon Web Service(AWS)

## Installation & Contributing Instructions

[Click Here](https://github.com/rixiobarrios/first-contributions)

## Sources

-   [Seqelize Docs](https://sequelize.readthedocs.io/en/2.0/docs/)
-   [Express Docs](https://expressjs.com/en/api.html)
-   [General Assembly AWS Repository](https://git.generalassemb.ly/seir-129/aws-s3-setup-guide)
-   [Robin Wieruch Blog](https://www.robinwieruch.de/postgres-express-setup-tutorial)
-   [JD Tadlock Youtube Channel](https://www.youtube.com/watch?v=9xJLcTxlEIs)
-   [Traversy Media Youtube Channel](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

<hr>

**Additional documentation can be found in the Frontend Repository**

[Click Here](https://github.com/mmarmol88/forfoodsake-frontend)
