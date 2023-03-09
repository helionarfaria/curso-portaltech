bebida_favorita = "Suco de uva"
preco_bebida = 18.00
alcoolica = False
comida_favorita = "Pizza"
preco_comida = 25.00
dinheiro = 500.00

if alcoolica == True:
    print('Helionar, sua bebida favorita é', bebida_favorita, ', que custa R$', preco_bebida, 'e contem álcool, enquanto sua comida favorita é',
          comida_favorita, ', que custa R$', preco_comida, '.')
else:
    print('Helionar, sua bebida favorita é', bebida_favorita, ', que custa R$', preco_bebida, 'e não contem álcool, enquanto sua comida favorita é',
          comida_favorita, ', que custa R$', preco_comida, '.')
valor_total_refeicao = preco_bebida + preco_comida

if dinheiro >= valor_total_refeicao and dinheiro > 150:
    print('Você possui R$', dinheiro, '. O valor total da refeição é: R$',
          valor_total_refeicao, ', seu dinheiro é suficiente e ainda sobra R$', (dinheiro - valor_total_refeicao), ', vai pagar pra todo mundo porque é ryco.')
elif dinheiro >= valor_total_refeicao:
    print('Você possui R$', dinheiro, '. O valor total da refeição é: R$',
          valor_total_refeicao, ', seu dinheiro é suficiente e ainda sobra R$', (dinheiro - valor_total_refeicao))
else:
    print('Você possui R$', dinheiro, '. O valor total da refeição é: R$',
          valor_total_refeicao, ', seu dinheiro é insuficiente')
