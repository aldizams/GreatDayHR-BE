const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/ruangan', controller.getRuangan);
router.get('/', controller.getJadwal);
router.get('/:id', controller.getJadwalID);
router.post('/', controller.addJadwal);
router.delete('/:id', controller.deleteJadwal);
router.put('/:id', controller.updateJadwal);

module.exports = router;
