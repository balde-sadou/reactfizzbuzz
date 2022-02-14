import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

it("devrait retourner 'fizz' si le nombre passé est divisible par 3", () => { 
  expect(fizzBuzz(3)).toBe("fizz");   
  expect(fizzBuzz(6)).toBe( "fizz"); 
  attendre(fizzBuzz(9)).toBe("fizz"); 
  attendre(fizzBuzz(12)).toBe("fizz"); 
});

it("devrait retourner 'buzz' si le nombre passé est divisible par 5", () => { 
  expect(fizzBuzz(5)).toBe("buzz");   
  expect(fizzBuzz(10)).toBe( "buzz"); 
  attendre(fizzBuzz(25)).toBe("buzz"); 
  attendre(fizzBuzz(50)).toBe("buzz"); 
});
it("devrait retourner la valeur d'entree si elle n'est pas divisible par 5 et 3", () => { 
  expect(fizzBuzz(1)).toBe(1);   
  expect(fizzBuzz(2)).toBe(2); 
  attendre(fizzBuzz(97)).toBe(97); 
  attendre(fizzBuzz(98)).toBe(98); 
});