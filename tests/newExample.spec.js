// @ts-check
import { test, expect } from '@playwright/test';

test.beforeAll(async ()=>{
    console.log('Before All')
})

test.afterAll(async ()=>{
    console.log('after All')
})

test.beforeEach(async ()=>{
    console.log('before each')
})

test.afterEach(async ()=>{
    console.log('after each')
})

test.describe('First Suite',()=>{
    test('has titwdle', async ({ page }) => {
        console.log('Test 1')
       });
       
       test('has tidwtle', async ({ page }) => {
           console.log('Test 2')
          });
})




  test.describe('TEst siite 2',()=>{
    test('has dwtitle', async ({ page }) => {
        console.log('Test 3')
       });
    
    
       test('has tiwdetle', async ({ page }) => {
        console.log('Test 4')
       });
  })
