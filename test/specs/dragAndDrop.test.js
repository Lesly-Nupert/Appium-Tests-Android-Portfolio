const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const DragAndDropPage = require('../pageobjects/dragAndDrop.page');

describe('Drag And Drop Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage and Drag and Drop Page display
        await HomePage.waitForHomePageDisplayed();
        await DragAndDropPage.openDragAndDropScreen();

        const title = await DragAndDropPage.getDragAndDropTitle()
        expect(title).toBe('Drag and Drop')
    });

    after(async () => {
        // Quit application 
        await browser.back();
        await browser.back();
    });

    //===================================
    // TESTS
    // ==================================

    it('Should drag element to drop zone l2', async () => {
        // dragAndDrop-L2
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropL2()
        await expect(DragAndDropPage.draggableL2).not.toBeDisplayed()
        await browser.pause(1000)
    });    

    it('Should drag element to drop zone r3', async () => {
        // dragAndDrop-R3
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropR3()
        await expect(DragAndDropPage.draggableR3).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone r1', async () => {
        // dragAndDrop-R1
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropR1()
        await expect(DragAndDropPage.draggableR1).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone r1', async () => {
        // dragAndDrop-C1
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropC1()
        await expect(DragAndDropPage.draggableC1).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone c3', async () => {
        // dragAndDrop-C3
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropC3()
        await expect(DragAndDropPage.draggableC3).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone r2', async () => {
        // dragAndDrop-R2
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropR2()
        await expect(DragAndDropPage.draggableR2).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone c2', async () => {
        // dragAndDrop-C2
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropC2()
        await expect(DragAndDropPage.draggableC2).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone l1', async () => {
        // dragAndDrop-L1
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropL1()
        await expect(DragAndDropPage.draggableL1).not.toBeDisplayed()
        await browser.pause(1000)
    });

    it('Should drag element to drop zone l3', async () => {
        // dragAndDrop-L3
        await browser.pause(1000)
        await DragAndDropPage.dragAndDropL3()
        await expect(DragAndDropPage.draggableL3).not.toBeDisplayed()
        await browser.pause(1000)
    });


    it('Should display success message, retry text and button  for return to Drag and Drop Page', async () => {

        const message = await DragAndDropPage.getSuccessMessage();
        expect(message).toBe('Congratulations');
        
        const retryText = await DragAndDropPage.getRetryText();
        expect(retryText).toBe('You made it, click retry if you want to try it again.');

        await DragAndDropPage.clickRetryButton()

        const checkTitle = await DragAndDropPage.getDragAndDropTitle();
        expect(checkTitle).toBe('Drag and Drop');
        
    });
});