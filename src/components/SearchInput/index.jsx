import { Button, Tab, Tabs, TextField, ThemeProvider } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAPIContext } from "../Context/APIContext";
import useStyles, { darkTheme } from "./styles";

const SearchInput = () => {
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const { control, handleSubmit } = useForm();
  const { fetchSearch, setContent, content } = useAPIContext();


  // Usado para limpar a pesquisa ao mudar de abas na tela
  useEffect(() => {
    setContent((prevState) => ({
      ...prevState,
      ref: "",
      pesquisa: [],
    }));
  }, [value]);

  const handleChange = (ev, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const handleInputSubmit = (data) => {
    fetchSearch(value, data.pesquisa);
      console.log('content.pesquisa', content.pesquisa)
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <form type="submit" onSubmit={handleSubmit(handleInputSubmit)}>
          <div className={styles.container}>
            <Controller
              control={control}
              name="pesquisa"
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pesquisar"
                  variant="filled"
                  className={styles.field}
                />
              )}
            />
            <Button type="submit" className={styles.button}>
              <Search />
            </Button>
          </div>
        </form>
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab className={styles.tab} label="Pesquisar Filmes" />
            <Tab className={styles.tab} label="Pesquisar Séries" />
          </Tabs>
        </div>
      </ThemeProvider>
    </>
  );
};

export default SearchInput;
