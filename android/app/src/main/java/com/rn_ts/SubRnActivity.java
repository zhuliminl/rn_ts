package com.rn_ts;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.rn_ts.RN.RnActivity;

public class SubRnActivity extends RnActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rn_sub_1";
  }


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }
}
