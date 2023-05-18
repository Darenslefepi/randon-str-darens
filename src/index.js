const messages = [
    "Aries, Te reparara tu armadura, para que puedas luchar!",
    "Tauro, Te mostrara el camino al septimo sentido!",
    "Geminis, Te demostrara que aun no eres nada!",
    "Cancer, Te mostrara lo cruel que es la vida para el debil!",
    "Leo, Te enseñara el poder de la velocidd de la luz!",
    "Virgo, Te demostrara el verdadero sufrimiento del hombre",
    "Libra, Te dara herramientas para que puedas lograr tu meta",
    "Scorpion, Te perdonara la vida al ver que tienes valentia!",
    "Sagitario, Te encomendara su mayor tesoro a tu cuidado",
    "Capricornio, Te dara la convicion de un verdadero protector",
    "Acuario, Te entregara su vida para mejorar tus capacidades",
    "Pissis, Te dara un final lleno de bellas rosas rojas, blanca y negras",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };

