-- Active: 1657839480594@@127.0.0.1@3306
SELECT course_names.*, department.name as department_name
FROM course_names
LEFT JOIN department ON course_names.department = department.id;
