-- 1. Crea una tabla empleados con id, nombre y  un campo detalles de tipo JSONB;
CREATE TABLE IF NOT EXISTS empleados(
id SERIAL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
detalles JSONB NULL
);
-- 2. Inserta al menos tres empleados con detalles variados (departamento, remoto(true o false), horario (fijo, flexible o reducido));
INSERT INTO empleados (nombre, detalles)
VALUES (
	'Pipito'
	, '{
		"departamento": "Ventas",
		"remoto": true,
		"horario": "fijo"
	}'
);

INSERT INTO empleados (nombre, detalles)
VALUES (
	'Juan'
	, '{
		"departamento": "Marketing",
		"remoto": false,
		"horario": "flexible"
	}'
);

INSERT INTO empleados (nombre, detalles)
VALUES (
	'Carlos'
	, '{
		"departamento": "Recursos Humanos",
		"remoto": true,
		"horario": "reducido"
	}'
);
-- 3. Mostrar el departamento de todos los empleados;
SELECT id, nombre, detalles ->> 'departamento' AS departamento
FROM public.empleados;
-- 4. Buscar empleados que trabajen en remoto;
SELECT id, nombre, detalles ->> 'remoto' AS remoto
FROM public.empleados
WHERE detalles @> '{"remoto": true}';
-- 5. Actualizar el horario de un empleado a “flexible”;
UPDATE empleados
SET detalles = jsonb_set(detalles, '{"horario"}', '"flexible"');
-- 6. Añadir un nuevo campo “proyecto” a todos los empleados con valor “Desconocido”;
UPDATE empleados
SET detalles = jsonb_set(detalles, '{"proyecto"}', '"desconocido"');