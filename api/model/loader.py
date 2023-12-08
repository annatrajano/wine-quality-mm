import pandas as pd


class Loader:

    def charge_data(self, url: str):
        """ Loads and return a DataFrame."""
        return pd.read_csv(url, delimiter=';')
