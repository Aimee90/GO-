/**
 * show: boolean
 */
var BModal = {
  init: options=>{ 
    const maskHidden = options.maskHidden || false;
    BModal.show = true;
    BModal.multi = options.multi||false;
    BModal.parentId = options.parentId;
    BModal.selected = options.selected;
    BModal.selectItem = options.selectItem;
    BModal.tapEvent = options.tapEvent;
    BModal.closeModal  = options.close;
    BModal.sure = options.sure;
    return BModal
  },
  close: () => {
    BModal.show = false
    return BModal
  } 
}

module.exports = {
  BModal: BModal
}