<template>
  <div class="container">
    <h1>About Vinny</h1>
    <img src="../../public/assets/about_selfie.jpg" class="me" />
    <p>
      Hi, I'm Vinny. I'm a Data Scientist working in real estate at Walker &
      Dunlop.<br /><br />I graduated from the University of Michigan in December
      2019 with a B.S. in Data Science.<br /><br />The first program I ever
      wrote was in 5th grade. It was a batch file messenger app to talk to
      friends at school who were in different classes than I was. It read and
      wrote to a file on a retired teacher's shared folder that had never been
      deleted.<br /><br />
      The first big (at the time) thing I wrote was in 7th grade, a phone
      spammer in Visual Basic. It would cycle through a list of emails and send
      a message repeatedly. Back in the olden days, this would completely stop
      your phone from working until the spam stopped.<br /><br />
      <img src="../../public/assets/spammer_ui.png" class="spammer" />
      <img src="../../public/assets/spammer_numbers.png" class="spammer" />
      <br /><br />
      Can you find the common link between those two things?
      <br /><br />
      Yes! They were both fun, and gave me the ability to do something I
      couldn't do before (talk to friends at school and temporarily ruin
      people's phones!).
      <br /><br />
      Data Science and Machine Learning as an industry is the perfect
      continuation of my childhood efforts. Every day, increases in computing
      power, new model architectures, and improved data
      collection/cleaning/analysis tools make new things possible. Some of those
      new possibilities are boring (improving the efficiency of factories), but
      a lot are fun and exciting (self-driving cars, home automation, robot
      brains).
      <br /><br />
      Nobody can say what will be in store for us 30 years from now. Even a
      decade in this field is likely too hard to predict. My goal is simply to
      be a part of it all!
      <br /><br />
      Until I add more, you can check my links below (or rather kind of
      overlapping this entire thing until you get to the very bottom. I'll fix
      the footer eventually). The GitHub link on the bottom left will take you
      to this site's repo 🙂<br /><br /><br /><br />
    </p>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: calc(3rem + 2.5vh);
  margin-bottom: 5rem;
  width: calc(95%);
}
.container h1 {
  margin-top: rem;
  font-size: calc(3rem + 1.5vw);
  border-bottom: 1px solid #333;
}

.container p {
  text-align: left;
  font-size: calc(1.75rem + 0.5vw);
}

.me {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 5%;
}

@media (min-width: 0px) {
  .container {
    width: 95%;
  }
}

@media (min-width: 700px) {
  .container {
    width: 70%;
    max-width: 1200px;
  }
}
</style>
