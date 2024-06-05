
<<<<<<< HEAD
import Home from "../screens/Hoteis";
import Category from "../screens/Category";
=======
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Voos from "../screens/Voos";
>>>>>>> 09147921b5f453fe7a492245757462dd2ce5e212
import { user } from "../data/Profile";
import Form from "../screens/Form";
import Termos from "../screens/Termos";
import QuemSomos from "../screens/QuemSomos";
import Logo from "../components/Logo";
import CentralDeAjuda from "../screens/CentralDeAjuda";
import Pacotes from "../screens/Pacotes"
<<<<<<< HEAD
import Hoteis from "../screens/Hoteis";

=======
import Detalhes from "../screens/Detalhes";
import Equipe from "../screens/Equipe";
>>>>>>> 09147921b5f453fe7a492245757462dd2ce5e212


const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (   
    <Drawer.Navigator screenOptions={{ headerShown: true, drawerPosition: 'right',
}}> 
      <Drawer.Screen
        name="Home"
        component={Home}
        
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Inicial",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Hotéis"
        component={Hoteis}
        initialParams={{ data: user }}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Perfil",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Voos"
        component={Voos}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="send"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Voos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
      <Drawer.Screen
        name="Form"
        component={Form}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="edit-2"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Cadastro",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
           <Drawer.Screen
        name="Termos"
        component={Termos}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="menu"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Termos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
           <Drawer.Screen
        name="Quem Somos"
        component={QuemSomos}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Quem Somos",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
       <Drawer.Screen
        name="Central de Ajuda"
        component={CentralDeAjuda}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
            
              name="info"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          
          drawerLabel: "Central de ajuda",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",

        }}
      />
      <Drawer.Screen
        name="Pacotes"
        component={Pacotes}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="package"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Pacotes",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
       <Drawer.Screen
        name="Equipe"
        component={Equipe}
        options={{
          headerTitle: () => (
            <Logo left={260}/>
          ),
          drawerIcon: ({ focused }) => (
            <Feather
              name="users"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          drawerLabel: "Equipe",
          drawerActiveTintColor: "#131313",
          drawerInactiveTintColor: "#D6D6D6",
        }}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
