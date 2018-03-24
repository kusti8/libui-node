#include "../ui.h"
#include "nbind/api.h"
#include "nbind/nbind.h"
#include "ui-node.h"

UiFixed::UiFixed() : UiControl((uiControl*)uiNewFixed()) {}

void UiFixed::append(UiControl *c, int x, int y) {
  uiFixedAppend((uiFixed*)getHandle(), c->getHandle(), x, y);
}

INHERITS_CONTROL_METHODS(UiFixed)

NBIND_CLASS(UiFixed) {
  construct<>();
  method(append);
  DECLARE_CHILD_CONTROL_METHODS()
}
