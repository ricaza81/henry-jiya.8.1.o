const {
  sumaTodosImpares,
  stringMasLarga,
  estaOffline,
  actividadesEnComun,
  buscaDestruye,
  sumarElTipo,
  crearClaseEmprendedor,
  mapear
} = require('../checkpoint.js');


let usuarios = [
    {
      nombre: 'toni',
      online: true
    },
    {
      nombre: 'emi',
      online: true
    },
    {
      nombre: 'agus',
      online: false
    }
];



describe('Funciones', function() {

  describe('sumaTodosImpares', function() {
    it('should return 13 for [1, 10, 3, 9, 6]', function() {
        expect(sumaTodosImpares([1, 10, 3, 9, 6])).toBe(13)
    });
    it('should return 16 for [5, 8, 11, 4]', function() {
      expect(sumaTodosImpares([5, 8, 11, 4])).toBe(16)
    });
  });

  describe('stringMasLarga', function() {
    it('should return "pasear"', function() {
        expect(stringMasLarga('Ayer fui a pasear a una plaza')).toBe('pasear')
    });
    it('should return "javascript"', function() {
      expect(stringMasLarga('Me gusta mucho javascript')).toBe('javascript')
    });
  });

  describe('estaOffline', function() {
    it('should return true', function() {
        expect(estaOffline(usuarios, 'agus')).toBe(true)
    });
    it('should return false', function() {
      expect(estaOffline(usuarios, 'toni')).toBe(false)
  });
  });

  describe('actividadesEnComun', function() {
    it('should return ["leer", "dormir"]', function() {
        const person1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
        const person2 = ['futbol', 'leer', 'programar', 'dormir'];
        expect(actividadesEnComun(person1,person2)).toEqual(['leer', 'dormir'])
    });

    it('should return ["programar", "comer"]', function() {
      const person1 = ['programar', 'tennis', 'viajar', 'comer', 'movies'];
      const person2 = ['escribir', 'comer', 'programar', 'dibujar'];
      expect(actividadesEnComun(person1, person2)).toEqual(['programar', 'comer'])
  });
  });

  describe('buscaDestruye', function() {
    it('should return eliminate 2 from [1, 2, 7, 3, 9] and return [1, 7, 3, 9]', function() {
        expect(buscaDestruye([1, 2, 7, 3, 9], 2)).toEqual([1, 7, 3, 9])
    });
    it('should return eliminate 1 from [1, 2, 4, 2, 3, 1, 1, 5, 7] and return [2, 4, 2, 3, 5, 7]', function() {
      expect(buscaDestruye([1, 2, 4, 2, 3, 1, 1, 5, 7], 1)).toEqual([2, 4, 2, 3, 5, 7])
    });
  });

  describe('sumarElTipo', function() {
    it('should return {auto: 2, moto: 1}', function() {
        expect(sumarElTipo(['auto', 'moto', 'auto'])).toEqual({auto: 2, moto: 1})
    });
    it('should return {auto: 5, bici: 2, bus: 2}', function() {
      const data = ['auto', 'auto', 'bici', 'auto', 'bus', 'bici', 'auto', 'bus', 'auto'];
      expect(sumarElTipo(data)).toEqual({auto: 5, bici: 2, bus: 2})
    });
  });
});

describe('Clase', function() {
  describe('crearClaseEmprendedor', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        expect(emprendedor.nombre).toBe('Elon');
        expect(emprendedor.apellido).toBe('Musk');
        expect(emprendedor.libros).toEqual([{nombre: 'Lord of the Flies',autor: 'William Golding'}]);
        expect(emprendedor.mascotas).toEqual(['perro','gato']);
    });
    it('should add a pet with addMascota', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      emprendedor.addMascota('loro');
      expect(emprendedor.mascotas[2]).toBe('loro');
  });
    it('should get the number of pets', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        expect(emprendedor.getMascotas()).toBe(2);
    });
    it('should add a book with addBook', function() {
        const Emprendedor = crearClaseEmprendedor();
        const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
        emprendedor.addBook('The Foundation Trilogy', 'Isaac Asimov');
        expect(emprendedor.libros[1]).toEqual({nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'});
    });
    it('should get all books name with getBooks', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}], ['perro','gato']);
      expect(emprendedor.getBooks()).toEqual(['Lord of the Flies','The Foundation Trilogy']);
    });
    it('should get full name with getFullName', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      const nombre = emprendedor.nombre;
      const apellido = emprendedor.apellido;
      expect(emprendedor.getFullName()).toBe(`${nombre} ${apellido}`);
    });
  });
});

describe('Extra Credit', function() {
  describe('mapear', function() {
      mapear();
      const numbers = [1, 2, 3, 4];
      it('should map', function() {
      expect(numbers.mapear(n => n * 2)).toEqual([2, 4, 6, 8]);
      })
      it('should map ok', function() {
      expect(numbers.mapear(n => n + 5)).toEqual([6, 7, 8, 9]);
      })
  })
});
