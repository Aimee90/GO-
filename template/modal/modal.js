/**
 * show: boolean
 */
var BModal = {
  init: options=>{ 
    const maskHidden = options.maskHidden || false;
    BModal.show = true;
    BModal.parentId = options.parendId;
    BModal.selected = options.selected;
    BModal.selectItem = options.selectItem;
    BModal.tapEvent = options.tapEvent;
    BModal.maskTap  = options.close
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