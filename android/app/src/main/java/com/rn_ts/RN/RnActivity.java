package com.rn_ts.RN;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.PermissionAwareActivity;

public abstract class RnActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler, PermissionAwareActivity {
    private final RnActivityDelegate mDelegate;

    protected RnActivity(RnActivityDelegate mDelegate) {
        this.mDelegate = mDelegate;
    }
}

