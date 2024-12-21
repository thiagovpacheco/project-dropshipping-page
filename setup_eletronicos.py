import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime

def setup_eletronicos():
    # Inicializa o Firebase Admin SDK
    cred = credentials.Certificate("firebase-key.json")
    firebase_admin.initialize_app(cred)
    
    # Obtém uma referência ao Firestore
    db = firestore.client()
    
    # Dados dos produtos eletrônicos
    eletronicos = {
        "macbook_pro": {
            "nome": "MacBook Pro 14' M3 Pro",
            "preco": 14999.99,
            "descricao": "Notebook Apple com chip M3 Pro, 18GB RAM, 512GB SSD",
            "categoria": "Notebooks",
            "marca": "Apple",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "processador": "M3 Pro",
                "ram": "18GB",
                "armazenamento": "512GB",
                "tela": "14 polegadas"
            },
            "estoque": 10,
            "dataCriacao": datetime.now()
        },
        "sony_wh1000xm4": {
            "nome": "Sony WH-1000XM4",
            "preco": 1999.99,
            "descricao": "Fone de ouvido premium com cancelamento de ruído",
            "categoria": "Áudio",
            "marca": "Sony",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "tipo": "Over-ear",
                "conexao": "Bluetooth 5.0",
                "bateria": "30 horas",
                "cancelamentoRuido": "Sim"
            },
            "estoque": 15,
            "dataCriacao": datetime.now()
        },
        "smart_tv": {
            "nome": "Smart TV LG OLED 65'",
            "preco": 8999.99,
            "descricao": "TV OLED 4K com HDR10 e processador α9",
            "categoria": "TVs",
            "marca": "LG",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "tamanho": "65 polegadas",
                "resolucao": "4K",
                "tecnologia": "OLED",
                "taxaAtualizacao": "120Hz"
            },
            "estoque": 5,
            "dataCriacao": datetime.now()
        },
        "dell_xps": {
            "nome": "Dell XPS 15",
            "preco": 12999.99,
            "descricao": "Notebook premium com Intel Core i9 e RTX 4070",
            "categoria": "Notebooks",
            "marca": "Dell",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "processador": "Intel Core i9",
                "ram": "32GB",
                "armazenamento": "1TB SSD",
                "placaVideo": "NVIDIA RTX 4070"
            },
            "estoque": 8,
            "dataCriacao": datetime.now()
        },
        "ipad_pro": {
            "nome": "iPad Pro 12.9' M2",
            "preco": 9499.99,
            "descricao": "Tablet Apple com chip M2, WiFi, 256GB",
            "categoria": "Tablets",
            "marca": "Apple",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "processador": "M2",
                "armazenamento": "256GB",
                "tela": "12.9 polegadas",
                "conectividade": "WiFi"
            },
            "estoque": 12,
            "dataCriacao": datetime.now()
        },
        "samsung_qled": {
            "nome": "Samsung QNED Neo QLED 75'",
            "preco": 11999.99,
            "descricao": "Smart TV com tecnologia Mini LED e 4K",
            "categoria": "TVs",
            "marca": "Samsung",
            "imagem": "url_da_imagem",
            "especificacoes": {
                "tamanho": "75 polegadas",
                "resolucao": "4K",
                "tecnologia": "Neo QLED",
                "taxaAtualizacao": "120Hz"
            },
            "estoque": 3,
            "dataCriacao": datetime.now()
        }
    }
    
    # Adiciona os produtos ao Firestore
    produtos_ref = db.collection("Produtos Nexus").document("Eletrônicos")
    produtos_ref.set(eletronicos)
        
    print("Produtos eletrônicos adicionados com sucesso!")

if __name__ == "__main__":
    setup_eletronicos()
