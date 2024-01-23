import random, json

marcas = [
    "Puma",
    "Nike",
    "Adiddas",
    "K-Swiss",
    "Kichute",
]

modelos = [
    "AstroWalk",
    "UrbanStride",
    "SlickStep",
    "NatureTrek",
    "EliteGlide",
    "PegasusFlyer",
    "RapidDash",
    "AquaMover",
    "VelvetJump",
    "SummitCrest",
    "TerraBound",
    "LunarLeap",
    "ZephyrZoom",
    "CobaltCruise",
    "EclipseRunner",
    "SolarSprint",
    "MirageMover",
    "OceanGlide",
    "ZenStride",
    "VortexVoyage",
    "ApexAmble",
    "FlashFoot",
    "BreezeBound",
    "TwilightTrot",
    "CometCruise",
    "SerenityStep",
    "HorizonHike",
    "RhythmRover",
    "MatrixMarch",
    "DreamDrift",
    "IronInch",
    "ThunderThrust",
    "SpiritStride",
    "NebulaNavigate",
    "CloudClimb",
    "AeroAmble",
    "MysticMove",
    "QuantumQuest",
    "NovaNavigate",
    "InfinityInch",
    "GalaxyGait",
    "RadiantRamble",
    "PhantomPace",
    "SparkSprint",
    "GravityGlide",
    "StarStep",
    "RebelRoam",
    "PulsePath",
    "CosmosCruise",
    "BlazeBound"
]

categorias = [
    "Esporte e lazer",
    "Casual",
    "Utilitário",
    "Corrida"
]

generos = [
    "Masculino",
    "Feminino",
    "Unisex"
]


def gerar_produto():
    marca = random.choice(marcas)
    modelo = random.choice(modelos)
    genero = random.choice(generos)

    nome = f"{marca} {modelo} {genero[:1]}"
    categoria = random.choice(categorias)

    descricao = f"Calçado {categoria.lower()} da marca {marca}, modelo {modelo}, versão {genero.lower()}."

    desconto = random.choice(range(0,45,5))

    precoAntes = random.choice(range(150,1200,25))
    precoDepois = round(precoAntes*(1-desconto/100),2)

    ativo = random.choice([True, True, True, False])

    produto = {
        "nome": nome,
        "marca":marca,
        "genero":genero,
        "categoria": categoria,
        "descricao": descricao,
        "desconto": desconto,
        "precoAntes": precoAntes,
        "precoDepois": precoDepois,
        "ativo": ativo
    }

    return produto


def salvar_json(variavel, nome_arquivo="produtos.json"):
    with open(nome_arquivo, 'w', encoding='utf-8') as file:
        json.dump(variavel, file, ensure_ascii=False, indent=4)


def gerar_produtos(n):
    produtos = [gerar_produto() for i in range(n)]
    salvar_json(produtos)

 
gerar_produtos(int(input("Quantidade: ")))
