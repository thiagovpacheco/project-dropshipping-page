import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime

def setup_firestore():
    # Inicializa o Firebase Admin SDK
    cred = credentials.Certificate("firebase-key.json")  # Você precisará baixar este arquivo do console do Firebase
    firebase_admin.initialize_app(cred)
    
    # Obtém uma referência ao Firestore
    db = firestore.client()
    
    # Dados dos produtos
    produtos = {
        "Smartphones": {
            "items": [
                {
                    "nome": "iPhone 15 Pro Max",
                    "preco": 9899.00,
                    "descricao": "O iPhone mais avançado já criado",
                    "categoria": "Smartphones",
                    "marca": "Apple",
                    "imagem": "url_da_imagem",
                    "especificacoes": {
                        "armazenamento": "256GB",
                        "cor": "Titânio Natural",
                        "tela": "6.7 polegadas"
                    },
                    "estoque": 10,
                    "dataCriacao": datetime.now()
                },
                {
                    "nome": "Samsung Galaxy S23 Ultra",
                    "preco": 6999.00,
                    "descricao": "O mais potente da Samsung",
                    "categoria": "Smartphones",
                    "marca": "Samsung",
                    "imagem": "url_da_imagem",
                    "especificacoes": {
                        "armazenamento": "256GB",
                        "cor": "Preto",
                        "tela": "6.8 polegadas"
                    },
                    "estoque": 15,
                    "dataCriacao": datetime.now()
                }
            ]
        },
        "Eletrônicos": {
            "items": [
                {
                    "nome": "MacBook Pro 16",
                    "preco": 15999.00,
                    "descricao": "Notebook profissional com chip M2 Pro",
                    "categoria": "Notebooks",
                    "marca": "Apple",
                    "imagem": "url_da_imagem",
                    "especificacoes": {
                        "processador": "M2 Pro",
                        "ram": "16GB",
                        "armazenamento": "512GB"
                    },
                    "estoque": 8,
                    "dataCriacao": datetime.now()
                },
                {
                    "nome": "iPad Pro 12.9",
                    "preco": 9499.00,
                    "descricao": "iPad Pro com chip M2",
                    "categoria": "Tablets",
                    "marca": "Apple",
                    "imagem": "url_da_imagem",
                    "especificacoes": {
                        "armazenamento": "256GB",
                        "cor": "Cinza Espacial",
                        "tela": "12.9 polegadas"
                    },
                    "estoque": 12,
                    "dataCriacao": datetime.now()
                }
            ]
        }
    }
    
    # Adiciona os produtos ao Firestore
    produtos_ref = db.collection("Produtos Nexus")
    
    for categoria, dados in produtos.items():
        print(f"Adicionando categoria: {categoria}")
        doc_ref = produtos_ref.document(categoria)
        doc_ref.set(dados)
        
    print("Banco de dados configurado com sucesso!")

if __name__ == "__main__":
    setup_firestore()
