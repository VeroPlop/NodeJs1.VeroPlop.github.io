
import{Router} from 'express'

//intanciamos parte de la aplicación
const router = Router()


//Creación de url 
router.get('/', (req, res)=> {res.render('index', {titulo:'Primera pagina Nodejs'});
});

router.get('/about', (req, res)=> {res.render('about', {titulo:'Acerca de Nodejs'});
});

router.get('/contact', (req, res)=> {res.render('contact', {titulo:'Pagina de contacto'});
});

//para unir las rutas con el index principal exportamos por defecto esta
export default router