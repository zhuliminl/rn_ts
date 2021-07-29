package com.rn_ts;

import com.facebook.react.ReactActivity;
import com.rn_ts.RN.RnActivity;
import com.rn_ts.RN.RnActivityDelegate;

public class MainActivity extends RnActivity {


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rn_ts";
  }

}
