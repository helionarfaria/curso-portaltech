VEICULO_RODAS = 4  # número de rodas do veículo a ser consultado
VEICULO_PESO_KG = 6000  # peso do veículo a ser consultado
VEICULO_PESSOAS = 7  # número de pessoas que o veiculo pode acomodar


if VEICULO_RODAS == 2 or VEICULO_RODAS == 3:
    print('A melhor habilitação para este veículo é a de categoria A')

elif VEICULO_RODAS == 4 and VEICULO_PESSOAS <= 8 and VEICULO_PESO_KG <= 3500:
    print('A melhor habilitação para este veículo é a de categoria B')

elif VEICULO_RODAS >= 4 and VEICULO_PESO_KG > 3500 and VEICULO_PESO_KG <= 6000 and VEICULO_PESSOAS < 8:
    print('A melhor habilitação para este veículo é a de categoria C')

elif VEICULO_RODAS >= 4 and VEICULO_PESO_KG <= 6000 and VEICULO_PESSOAS > 8:
    print('A melhor habilitação para este veículo é a de categoria D')

elif VEICULO_RODAS >= 4 and VEICULO_PESO_KG > 6000:
    print('A melhor habilitação para este veículo é a de categoria E')
