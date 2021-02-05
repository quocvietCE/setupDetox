describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('My Recorded Test', async () => {
    await element(by.text('Welcome to React')).tap({x: 187, y: 35.5});
    await element(by.id('welcome')).tap({x: 66, y: 15.5});
    await waitFor(
      element(
        by.text(
          'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
        ),
      ),
    )
      .toBeVisible()
      .whileElement(element(by.type('RCTCustomScrollView')))
      .scroll(50, 'down');
    await element(
      by.text(
        'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
      ),
    ).tap({x: 83.5, y: 89.5});
    await waitFor(
      element(
        by.label(
          "Step One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.",
        ),
      ),
    )
      .toBeVisible()
      .whileElement(element(by.type('RCTCustomScrollView')))
      .scroll(50, 'up');
    await element(
      by.label(
        "Step One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.",
      ),
    ).tap({x: 215, y: 125.5});
    await element(
      by.text("Press Cmd + R in the simulator to reload your app's code."),
    ).tap({x: 190, y: 18.5});
    await element(
      by.text(
        'Press Cmd + D in the simulator or Shake your device to open the React Native debug menu.',
      ),
    ).tap({x: 174.5, y: 2.5});
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
