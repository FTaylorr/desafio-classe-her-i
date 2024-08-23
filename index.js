// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar
    atacar() {
      let ataque;
      
      // Determinando o tipo de ataque com base no tipo de herói
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'desconhecido'; // Valor padrão se o tipo não corresponder a nenhum caso
          break;
      }
      
      // Exibindo a mensagem
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi e chamando o método atacar
  
  const mago = new Heroi('Gandalf', 1000, 'mago');
  mago.atacar(); // Deve exibir: O mago atacou usando magia
  
  const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  guerreiro.atacar(); // Deve exibir: O guerreiro atacou usando espada
  
  const monge = new Heroi('Shaolin', 28, 'monge');
  monge.atacar(); // Deve exibir: O monge atacou usando artes marciais
  
  const ninja = new Heroi('Naruto', 17, 'ninja');
  ninja.atacar(); // Deve exibir: O ninja atacou usando shuriken