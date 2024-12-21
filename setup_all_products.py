import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime

def delete_collection(coll_ref, batch_size=100):
    """Função recursiva para deletar uma coleção e todas suas subcoleções"""
    docs = coll_ref.limit(batch_size).stream()
    deleted = 0

    for doc in docs:
        print(f"Processando documento: {doc.id}")
        # Primeiro, deleta todas as subcoleções
        for subcoll in doc.reference.collections():
            delete_collection(subcoll)
        # Depois deleta o próprio documento
        print(f"Deletando documento: {doc.id}")
        doc.reference.delete()
        deleted += 1

    if deleted >= batch_size:
        # Se deletamos o tamanho do batch, pode haver mais documentos
        return delete_collection(coll_ref, batch_size)

def setup_produtos():
    # Inicializa o Firebase Admin SDK
    try:
        app = firebase_admin.get_app()
    except ValueError:
        cred = credentials.Certificate("firebase-key.json")
        app = firebase_admin.initialize_app(cred)
    
    # Obtém uma referência ao Firestore
    db = firestore.client()
    
    try:
        # Primeiro, exclui toda a coleção Produtos Nexus e seus documentos
        print("Excluindo toda a coleção Produtos Nexus e suas subcoleções...")
        produtos_nexus_ref = db.collection('Produtos Nexus')
        delete_collection(produtos_nexus_ref)
        print("Toda a coleção foi limpa com sucesso!")
        
        # Agora vamos criar a estrutura correta e adicionar os produtos
        produtos = [
            {
                "nome": "Samsung Galaxy S23 Ultra",
                "preco": 6999.99,
                "precoAntigo": 7999.99,
                "descricao": "O mais avançado smartphone Samsung com S Pen",
                "imagem": "https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=1000",
                "marca": "Samsung",
                "categoria": "smartphones",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 12,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "MacBook Pro 14' M3 Pro",
                "preco": 14999.99,
                "precoAntigo": 16999.99,
                "descricao": "Notebook Apple com chip M3 Pro, 18GB RAM, 512GB SSD",
                "imagem": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000",
                "marca": "Apple",
                "categoria": "notebooks",
                "novo": True,
                "desconto": False,
                "porcentagemDesconto": 0,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "Sony WH-1000XM4",
                "preco": 1999.99,
                "precoAntigo": 2499.99,
                "descricao": "Fone de ouvido premium com cancelamento de ruído",
                "imagem": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000",
                "marca": "Sony",
                "categoria": "acessorios",
                "novo": True,
                "desconto": False,
                "porcentagemDesconto": 0,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "Smart TV LG OLED 65'",
                "preco": 8999.99,
                "precoAntigo": 10999.99,
                "descricao": "TV OLED 4K com HDR10 e processador α9",
                "imagem": "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000",
                "marca": "LG",
                "categoria": "tvs",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "PlayStation 5",
                "preco": 3799.99,
                "precoAntigo": 4499.99,
                "descricao": "Console de última geração com controle DualSense",
                "imagem": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=1000",
                "marca": "Sony",
                "categoria": "consoles",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "iPad Pro 12.9' M2",
                "preco": 9499.99,
                "precoAntigo": 10999.99,
                "descricao": "Tablet Apple com chip M2, WiFi, 256GB",
                "imagem": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000",
                "marca": "Apple",
                "categoria": "tablets",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "Dell XPS 15",
                "preco": 12999.99,
                "precoAntigo": 14999.99,
                "descricao": "Notebook premium com Intel Core i9 e RTX 4070",
                "imagem": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000",
                "marca": "Dell",
                "categoria": "notebooks",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "iPhone 15 Pro Max",
                "preco": 9499.99,
                "precoAntigo": 10499.99,
                "descricao": "iPhone mais avançado com chip A17 Pro",
                "imagem": "https://images.unsplash.com/photo-1695048133142-1a20484d7f2f?q=80&w=1000",
                "marca": "Apple",
                "categoria": "smartphones",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            },
            {
                "nome": "Samsung Neo QLED 75'",
                "preco": 11999.99,
                "precoAntigo": 13999.99,
                "descricao": "Smart TV com tecnologia Mini LED e 4K",
                "imagem": "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000",
                "marca": "Samsung",
                "categoria": "tvs",
                "novo": True,
                "desconto": True,
                "porcentagemDesconto": 15,
                "dataCriacao": firestore.SERVER_TIMESTAMP
            }
        ]
        
        print("\nCriando nova estrutura e adicionando produtos...")
        produtos_ref = db.collection('Produtos Nexus').document('produtos').collection('produtos')
        
        for produto in produtos:
            doc_ref = produtos_ref.document()
            doc_ref.set(produto)
            print(f"Produto adicionado com ID: {doc_ref.id}")
        
        print("Todos os produtos foram adicionados com sucesso!")
        
        # Verifica se os produtos foram adicionados
        print("\nVerificando produtos adicionados:")
        docs = produtos_ref.stream()
        for doc in docs:
            print(f"ID: {doc.id}, Nome: {doc.get('nome')}")
            
    except Exception as e:
        print(f"Erro ao configurar produtos: {str(e)}")

if __name__ == "__main__":
    setup_produtos()
