CREATE TABLE IF NOT EXISTS Vehiculos(
	id SERIAL PRIMARY KEY,
	modelo VARCHAR(150) NOT NULL,
	especificaciones JSONB NULL
);

-- inserción de los registros
INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
	'Golf MK7-R'
	, '{
		"color": "Azul medianoche",
		"puertas": "2",
		"tipo": "gasofa",
		"potencia": "300"
	}'
);

INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
	'Seat Leon'
	, '{
		"color": "Rojo",
		"puertas": "4",
		"tipo": "gasofa",
		"potencia": "150"
	}'
);

INSERT INTO Vehiculos (modelo, especificaciones)
VALUES (
	'Honda Civic'
	, '{
		"color": "Rosa chicle",
		"puertas": "4",
		"tipo": "diesel",
		"potencia": "200"
	}'
);


--
SELECT id, modelo, especificaciones ->> 'color' AS color, especificaciones ->> 'tipo' AS tipo
FROM public.vehiculos
WHERE especificaciones ->> 'tipo' = 'gasofa'; -- se selecciona la columna, luego se referencia el campo y valor en ' '
-- otra forma de filtrar
SELECT id, modelo, especificaciones ->> 'color' AS color, especificaciones ->> 'tipo' AS tipo
FROM public.vehiculos
WHERE especificaciones @> '{"color": "Rojo"}'; -- se pone como en un fichero json y con " "

--
UPDATE vehiculos
SET especificaciones = jsonb_set(especificaciones, '{"tipo"}', '"gasolina"')
WHERE especificaciones @> '{"color": "Rojo"}'
;

-- añadir clave que no existe en nuestro campo
UPDATE vehiculos
SET especificaciones = jsonb_set(especificaciones, '{"aleron"}', 'false')
;-- como no hay where se ha añadido a todos los registros
