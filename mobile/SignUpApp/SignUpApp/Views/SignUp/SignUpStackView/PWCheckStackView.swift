//
//  PWCheckStackView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PWCheckStackView: SignUpStackView {
    
    private let PWCheckAlertlabel = SignUpAlertLabel(wrongMessage: "비밀번호가 일치하지 않습니다.", correctMessage: "비밀번호가 일치합니다.")
    
    override func configure() {
        self.alertLabel = PWCheckAlertlabel
        guard let alertLabel = alertLabel else { return }
        addArrangedSubview(alertLabel)
    }
}
