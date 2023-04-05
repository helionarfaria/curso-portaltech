ano_valido = False

while ano_valido == False:

    try:
        nome = str(input("Insira seu nome: "))
        ano = int(input("Insira o ano de seu nascimento: "))
        idade = 2022 - ano
        if (ano > 1922 and ano < 2021):
            print(nome, ", em 2022 você fez ou fará: ", idade, "anos!")
            ano_valido = True
        else:
            print("Selecione um ano entre 1922 e 2021")

    except Exception as err:
        print("Ocorreu um erro")
        print(err)
