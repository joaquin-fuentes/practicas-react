const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createProducto(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const nombre = faker.name.nombre();
    const precio = faker.precio.precio();
    const categoria = faker.categoria.categoria();

    result.push({
      id: faker.random.uuid(),
      nombre,
      precio,
      urlImagen,
      categoria 
    });
  }

  return result;
}

function main() {
  const data = {
    productos: createProducto(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();