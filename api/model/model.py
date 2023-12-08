import pickle

class Model:
    
    def load_model(path):
        if path.endswith('.pkl'):
            model = pickle.load(open(path,'rb'))
        else:
            raise Exception('Formato de arquivo não suportado')
        return model
    
