export default function Bio() {
  function getAge() {
    const birthDate = new Date("2000-01-17");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <div className="flex flex-col justify-center gap-4">
      <h2 className="text-4xl font-semibold">Hello 👋</h2>
      <p className="text-xl">
        My name is Andreas, i'm {getAge()} years old and currently doing my
        masters in informatics at UiO. I would describe myself as a (aspiring)
        full stack developer, with a passion for back-end and low level stuff
        like networks and distributed systems.
      </p>
      <p className="text-xl">
        I'm also a guitarist, and as a result i also like to explore electronics
        and analogue technology. At the moment my favorite programming language
        is Go, but i'm always looking to learn new stuff.
      </p>
    </div>
  );
}
